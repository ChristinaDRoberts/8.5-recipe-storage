
from rest_framework import viewsets
from .serializers import RecipeSerializer
from django.utils.timezone import now




#views.py with a DRF viewset configured to list and create listings


class ApiViewSet(viewsets.ModelViewSet):

    serializer_class = RecipeSerializer
    # queryset = Rides.objects.all()
    # .order_by('-id')[:10]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)