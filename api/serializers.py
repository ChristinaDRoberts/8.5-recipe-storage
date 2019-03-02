
# //depth used to use the forign key tpo add ingredient into recipe



from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers
from frontend.models import Recipe, Ingredient


# This class is responsible for properly formatting our model as json
# We need to tell it the model to use, and which fields we want included in the json.
class RecipeSerializer(ModelSerializer):
    # created = serializers.DateTimeField(required=False)

    class Meta:
        model = Recipe
        fields = ["title", "image", "servings", "directions"]
        depth = 1




 #make another serializer for ingredient
class IngredientSerializer(ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'
        depth = 1

