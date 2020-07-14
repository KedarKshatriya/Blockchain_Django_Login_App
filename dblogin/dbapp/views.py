from django.shortcuts import render
from django.http import HttpResponse
from .models import  userlogin


def loginbl(request):
    return render(request,'dbapp/login.html')

def registerbl(request):
    if request.method == "POST":
        username = request.POST.get("usern")
        address = request.POST.get("address")
        users = userlogin.filter(username=username)
        print("Users: ",users)

        return HttpResponse("Check the shit first")
    return render(request,'dbapp/register.html')

def registercheck(request):
    return HttpResponse("False")

def forgetbl(request):
    return render(request,'dbapp/forget.html')