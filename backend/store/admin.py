from django.contrib import admin

from .models import (Product, Category, Brand, ProductImages)

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ['category', 'brand', 'name', ]
    list_filter = ['category', 'brand', ]

admin.site.register(Product, ProductAdmin)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'logo', 'slug']
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name', ]


@admin.register(ProductImages)
class ProductImagesAdmin(admin.ModelAdmin):
    list_display = ['product', 'image', ]
    list_filter = ['product', ]