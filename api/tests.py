from django.test import TestCase
from django.urls import reverse
from django.http import HttpResponse


# Create your tests here.
class TestViews(TestCase):

    def test_index(self):
        view_url = reverse('api:damage')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)
        return HttpResponse()

    def test_list(self):
        pass