from django.urls import path

from store.api import views


urlpatterns = [
    path('product-list/', views.ProjectListAPIView.as_view(), name='products'),
    path('category-list/', views.CategoryListAPIView.as_view(), name='categories'),
    path('brand-list/', views.BrandListAPIView.as_view(), name='brands'),
    path('homeslider-list/', views.HomeSliderAPIView.as_view(), name='homesliders'),
]
