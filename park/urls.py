from .views import getStatus, home
from django.urls import path


urlpatterns = [ path('',home),
path('getStatus',getStatus)
]