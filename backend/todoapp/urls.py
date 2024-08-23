from django.urls import path 
from . import views 


urlpatterns = [
    path("todos", views.todo_list),
    path("todo/<int:pk>", views.todo_detail)
]
