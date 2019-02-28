
from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers
from .models import User


# This class is responsible for properly formatting our model as json
# We need to tell it the model to use, and which fields we want included in the json.
class RecipeSerializer(ModelSerializer):
    # created = serializers.DateTimeField(required=False)

    class Meta:
        model = User
        fields = '__all__'
        depth = 1