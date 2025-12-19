from django.urls import path
from .views import (
    PostListView,
    PostDetailView,
)

urlpatterns = [
    path('list/', PostListView.as_view(), name='Post List'),
    path('detail/<str:slug>/', PostDetailView.as_view(), name='Post Detail'),
]
