using Core.Entities;

namespace API.DTOs
{
    public static class DomainToDtoMapper
    {
        public static CreateProductDto ToProductDto(this Product product) { 
            return new CreateProductDto 
            {
                Brand = product.Brand,
                Description = product.Description,
                Name = product.Name,
                PictureUrl = product.PictureUrl,
                QuantityInStock = product.QuantityInStock,
                Type = product.Type,
                Price = product.Price,
            }; 
        }
    }
}
