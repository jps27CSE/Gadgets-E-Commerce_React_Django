from django.contrib import admin
from django.utils.html import mark_safe, format_html

from .models import (Product, Category, Brand, ProductImages, HomeSlider)

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


@admin.register(HomeSlider)
class HomeSliderAdmin(admin.ModelAdmin):
    list_display = ['text', 'image', 'preview_image', 'profile_picture']

    def preview_image(self, obj):
        "Show the user profile picture"
        if not obj.image:
            return mark_safe("<img src='' alt='No Image' width='25%'/>")
        else:
            return mark_safe("<img src='{}' alt='{}' width='25%'/>".format(obj.image.url, obj.image.name))
        
    
    def profile_picture(self, obj):
        if not obj.image:
            return format_html('<img src="" alt="No Image" width="50%" />')
        return format_html("<img src='{}' alt='{}' width='50%' />".format(obj.image.url, obj.image.name))
