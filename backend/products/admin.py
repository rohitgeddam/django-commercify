from django.contrib import admin
from products.models import Product, Category, ProductImage
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product, ProductAdmin)

class CategoryAdmin(admin.ModelAdmin):
    pass

admin.site.register(Category, CategoryAdmin)


class ProductImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(ProductImage, ProductImageAdmin)