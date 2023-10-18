using AutoMapper;
using System.Linq.Expressions;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IRepositoryBase<TEntity>
    {
        /// <summary>
        /// Get filtered and ordered TEntity entities with joined data. If all parameters
        /// are omited, all resources (unordered) are returned without joined data.
        /// </summary>
        /// <param name="filter">Filter predicate that accepts TEntity and returns bool</param>
        /// <param name="orderBy">OrderBy expresion that accepts IQueryable<TEntity> and returns IOrderedQueryable<TEntity></param>
        /// <param name="includeProperties">Properties to make join against (comma separated prop names)</param>
        Task<IEnumerable<TEntity>> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = ""
        );

        IQueryable<TEntity> GetIQueryable(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = ""
        );

        /// <summary>
        /// Get filtered and ordered TEntity resources projected from TEntity to TProjectedEntity using projection expression.
        /// If filter and orderBy parameters are omitted, all (unordered) entities projected to TProjectedEntity are returned.
        /// </summary>
        /// <param name="projection">Projection expression for projecting TEntity to TProjectedEntity</param>
        /// <param name="filter">Filter predicate that accepts TEntity and returns bool</param>
        /// <param name="orderBy">OrderBy expresion that accepts IQueryable<TEntity> and returns IOrderedQueryable<TEntity></param>
        Task<IEnumerable<TProjectedEntity>> Get<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        );

        IQueryable<TProjectedEntity> GetIQueryable<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        );

        /// <summary>
        /// Get filtered and ordered TEntity resources projected to TProjectedEntity using Automaper extensions. Appropriate
        /// mapping has to exist from TEntity to TProjectedEntity.
        /// If filter and orderBy parameters are omitted, all (unordered) entities projected to TProjectedEntity are returned.
        /// </summary>
        /// <param name="mapper">IMapper instance used for projection</param>
        /// <param name="filter">Filter predicate that accepts TEntity and returns bool</param>
        /// <param name="orderBy">OrderBy expresion that accepts IQueryable<TEntity> and returns IOrderedQueryable<TEntity></param>
        Task<IEnumerable<TProjectedEntity>> Get<TProjectedEntity>(
            IMapper mapper,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        );

        IQueryable<TProjectedEntity> GetIQueryable<TProjectedEntity>(
            IMapper mapper,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        );

        /// <summary>
        /// Finds and returns TEntity entity by primary key. If not found, returns null.
        /// </summary>
        /// <param name="id">The values of the primary key for the entity to be found</param>
        Task<TEntity> GetByID(params object[] id);

        /// <summary>
        /// Check does any entity exist that satisfy provided predicate. If predicate is not provided
        /// check does any entity exist at all.
        /// </summary>
        /// <param name="predicate">Predicate expression to check entities against</param>
        Task<bool> DoesAnyExist(Expression<Func<TEntity, bool>> predicate = null);

        /// <summary>
        /// Returns only element that satisfy predicate expression. If there is no such element, returns default(TEntity).
        /// If more than one element satisfies predicate, throws exception.
        /// </summary>
        /// <param name="predicate">Predicate expression to check entities against</param>
        Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// Returns only element that satisfy predicate expression projected from TEntity to TProjectedEntity using Automaper.
        /// If there is no such element, returns default(TEntity). If more than one element satisfies predicate, throws exception.
        /// Appropriate mapping has to exist from TEntity to TProjectedEntity.
        /// </summary>
        /// <param name="predicate">Predicate expression to check entities against</param>
        /// <param name="mapper">IMapper instance used for projection</param>
        Task<TProjectedEntity> SingleOrDefaultAsync<TProjectedEntity>(
            Expression<Func<TEntity, bool>> predicate,
            IMapper mapper
        );

        Task<TProjectedEntity> SingleOrDefaultAsync<TProjectedEntity>(
            Expression<Func<TEntity, TProjectedEntity>> projection,
            Expression<Func<TEntity, bool>> predicate
        );

        /// <summary>
        /// Inserts TEntity so EF starts to track it as "Added"
        /// </summary>
        /// <param name="entity">Entity to insert</param>
        void Insert(TEntity entity);

        /// <summary>
        /// Deletes entity with provided primary key so EF starts to track it as "Deleted"
        /// </summary>
        /// <param name="id">The values of the primary key for the entity to be deleted</param>
        Task Delete(params object[] id);

        /// <summary>
        /// Deletes entity so EF starts to track it as "Deleted"
        /// </summary>
        /// <param name="entityToDelete">Entity to delete</param>
        void Delete(TEntity entityToDelete);

        /// <summary>
        /// Updates entity so EF starts to track it as "Modified"
        /// </summary>
        /// <param name="entityToUpdate">Entity to update</param>
        void Update(TEntity entityToUpdate);
    }
}
