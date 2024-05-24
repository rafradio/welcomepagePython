from django.urls import path, include
from . import views
from .ClassViews import FirstPageView

urlpatterns = [path('', FirstPageView.as_view(), name="testform"),]