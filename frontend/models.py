
from django.db import models
from django.contrib.auth import get_user_model


# User = get_user_model()


class Recipe(models.Model):

    title = models.CharField(max_length=255, null=True)
    image = models.ImageField( blank=True)
    servings = models.IntegerField(default=4)
    directions = models.TextField()


class Ingredient(models.Model):
    POUND = 'lb'
    OUNCE = 'oz'
    CUP = 'cup'
    TEASPOON = ' tsp'
    TABLESPOON = 'tbs'
    QUART = 'qt'

    UNIT_CHOICES = (
        (POUND, 'lb'),
        (OUNCE, 'oz'),
        (CUP, 'cup'),
        (TEASPOON, 'tsp'),
        (TABLESPOON, 'tbs'),
        (QUART, 'qt')
    )

    name: models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits = 10, decimal_places=2)
    units = models.CharField(max_length=255, choices=UNIT_CHOICES)
    recipe = models.ForeignKey(Recipe, on_delete =models.CASCADE, related_name="ingredients")