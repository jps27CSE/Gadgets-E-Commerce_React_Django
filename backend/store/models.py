from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=20, unique=True)
    logo = models.ImageField(upload_to='Category')
    slug = models.SlugField(unique=True, help_text="Slug is a field in autocomplete mode, but if you want you can modify its contents")

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default="", blank=True, related_name="Products")
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, default="", blank=True, related_name="Products")
    specification = models.TextField(blank=True, default="")
    price = models.FloatField(blank=False, default=0.00, validators=[MinValueValidator(0.0)], help_text='Price Can not be Less than Zero.')
    inStock = models.BooleanField(default=True)
    datatime = models.DateTimeField(auto_now_add=True)
    warranty = models.CharField(max_length=50, blank=True)
    
    class Meta:
        unique_together = [['name', 'category', 'brand'] ]
    
    def __str__(self):
        return self.name


class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='Product Images')

    def __str__(self):
        return self.product.name


class HomeSlider(models.Model):
    text = models.CharField(max_length=255)
    image = models.ImageField(upload_to='sliders')

    def __str__(self):
        return self.text[:10]
