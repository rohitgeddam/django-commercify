from rest_framework.serializers import ModelSerializer
from products import models

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        # fields = ['type',]
        fields = "__all__"

class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = "__all__"

class ProductSerializer(ModelSerializer):
    category = CategorySerializer(many=True)


    class Meta:
        model = models.Product
        fields = ['id','name', 'description', 'thumbnail', 'price',
                    'created_on', 'updated_on', 'stock_count',
                    'category', 'user',]
        # fields = "__all__"