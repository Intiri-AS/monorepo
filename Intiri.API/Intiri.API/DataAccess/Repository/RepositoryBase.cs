using AutoMapper.QueryableExtensions;
using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Intiri.API.DataAccess.Repository
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity>
        where TEntity : class
    {
        #region Fields

        protected readonly DataContext _context;
        protected readonly DbSet<TEntity> _dbSet;

        #endregion Fields

        #region Constructor

        public RepositoryBase(DataContext context)
        {
            ArgumentNullException.ThrowIfNull(context, nameof(context));

            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        #endregion Constructor

        #region IRepository CREATE members

        public void Insert(TEntity entity)
        {
            ArgumentNullException.ThrowIfNull(entity, nameof(entity));

            _dbSet.Add(entity);
        }

        #endregion IRepository CREATE members

        #region IRepository READ members

        public async Task<IEnumerable<TEntity>> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = ""
        )
        {
            return await GetIQueryable(filter, orderBy, includeProperties).ToListAsync();
        }

        public IQueryable<TEntity> GetIQueryable(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = ""
        )
        {
            IQueryable<TEntity> query = _dbSet;

            query = Filter(filter, query);

            string[] includeProps = includeProperties.Split(
                ',',
                StringSplitOptions.RemoveEmptyEntries
            );

            foreach (string includeProperty in includeProps)
            {
                query = query.Include(includeProperty);
            }

            return orderBy != null ? orderBy(query) : query;
        }

        public async Task<IEnumerable<TProjectedEntity>> Get<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        )
        {
            return await GetIQueryable(projection, filter, orderBy).ToListAsync();
        }

        public IQueryable<TProjectedEntity> GetIQueryable<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        )
        {
            ArgumentNullException.ThrowIfNull(projection, nameof(projection));

            IQueryable<TEntity> query = _dbSet;

            query = Filter(filter, query);
            query = OrderBy(orderBy, query);

            return query.Select(projection);
        }

        public async Task<IEnumerable<TProjectedEntity>> Get<TProjectedEntity>(
            IMapper mapper,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        )
        {
            return await GetIQueryable<TProjectedEntity>(mapper, filter, orderBy).ToListAsync();
        }

        public IQueryable<TProjectedEntity> GetIQueryable<TProjectedEntity>(
            IMapper mapper,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        )
        {
            ArgumentNullException.ThrowIfNull(mapper, nameof(mapper));

            IQueryable<TEntity> query = _dbSet;

            query = Filter(filter, query);
            query = OrderBy(orderBy, query);

            return query.ProjectTo<TProjectedEntity>(mapper.ConfigurationProvider);
        }

        public async Task<TEntity> GetByID(params object[] id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));

            return await _dbSet.FindAsync(id);
        }

        public async Task<bool> DoesAnyExist(Expression<Func<TEntity, bool>> predicate = null)
        {
            return predicate != null ? await _dbSet.AnyAsync(predicate) : await _dbSet.AnyAsync();
        }

        public async Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            ArgumentNullException.ThrowIfNull(predicate, nameof(predicate));

            return await _dbSet.SingleOrDefaultAsync(predicate);
        }

        public async Task<TProjectedEntity> SingleOrDefaultAsync<TProjectedEntity>(
            Expression<Func<TEntity, bool>> predicate,
            IMapper mapper
        )
        {
            ArgumentNullException.ThrowIfNull(predicate, nameof(predicate));
            ArgumentNullException.ThrowIfNull(mapper, nameof(mapper));

            return await _dbSet
                .Where(predicate)
                .ProjectTo<TProjectedEntity>(mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<TProjectedEntity> SingleOrDefaultAsync<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> predicate
        )
        {
            ArgumentNullException.ThrowIfNull(projection, nameof(projection));
            ArgumentNullException.ThrowIfNull(predicate, nameof(predicate));

            return await _dbSet.Where(predicate).Select(projection).SingleOrDefaultAsync();
        }

        #endregion IRepository READ members

        #region IRepository UPDATE members

        public void Update(TEntity entityToUpdate)
        {
            ArgumentNullException.ThrowIfNull(entityToUpdate, nameof(entityToUpdate));

            _dbSet.Attach(entityToUpdate);
            _context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        #endregion IRepository UPDATE members

        #region IRepository DELETE members

        public async Task Delete(params object[] id)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));

            TEntity entityToDelete = await GetByID(id);
            Delete(entityToDelete);
        }

        public void Delete(TEntity entityToDelete)
        {
            ArgumentNullException.ThrowIfNull(entityToDelete, nameof(entityToDelete));

            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                _dbSet.Attach(entityToDelete);
            }

            _dbSet.Remove(entityToDelete);
        }

        #endregion IRepository DELETE members

        #region Private methods

        private IQueryable<TEntity> Filter(
            Expression<Func<TEntity, bool>> filter,
            IQueryable<TEntity> query
        )
        {
            if (filter != null)
            {
                query = query.Where(filter);
            }

            return query;
        }

        private IQueryable<TEntity> OrderBy(
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy,
            IQueryable<TEntity> query
        )
        {
            if (orderBy != null)
            {
                query = orderBy(query);
            }

            return query;
        }

        #endregion Private methods
    }
}
