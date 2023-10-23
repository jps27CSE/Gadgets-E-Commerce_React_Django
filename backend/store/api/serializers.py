from rest_framework import serializers

from store.models import Product, Brand, Category, ProductImages, HomeSlider


class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'



class ProductImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImages
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    
    images = ProductImagesSerializer(many=True)
    brand = BrandSerializer()
    category = CategorySerializer()
    class Meta:
        model = Product
        fields = '__all__'


class HomeSliderSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomeSlider
        fields = '__all__'