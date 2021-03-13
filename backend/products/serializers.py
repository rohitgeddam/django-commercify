from rest_framework.serializers import ModelSerializer
from products import models

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        # fields = ['type',]
        fields = "__all__"

class ProductSerializer(ModelSerializer):
    category = CategorySerializer(many=False)
    class Meta:
        model = models.Product
        fields = ['name', 'description', 'thumbnail', 'price',
                    'created_on', 'updated_on', 'stock_count',
                    'category', 'user']
        # fields = "__all__"