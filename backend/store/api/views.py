from rest_framework.generics import ListAPIView

from store.models import Product, Category, Brand, HomeSlider

from . import serializers


class ProjectListAPIView(ListAPIView):
    
    serializer_class = serializers.ProductSerializer
    queryset = Product.objects.all().order_by('-datatime')
    
    
class CategoryListAPIView(ListAPIView):

    serializer_class = serializers.CategorySerializer
    queryset = Category.objects.all().order_by('name')


class BrandListAPIView(ListAPIView):

    serializer_class = serializers.BrandSerializer
    queryset = Brand.objects.all()


class HomeSliderAPIView(ListAPIView):

    serializer_class = serializers.HomeSliderSerializer
    queryset = HomeSlider.objects.all().order_by('-id')