from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    rel_cvcvdj_1_1 = models.OneToOneField(
        "home.Cvcvdj",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="user_rel_cvcvdj_1_1",
    )
    rel_cvcvdj_1_n = models.ForeignKey(
        "home.Cvcvdj",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="user_rel_cvcvdj_1_n",
    )
    rel_cvcvdj_n_n = models.ManyToManyField(
        "home.Cvcvdj",
        blank=True,
        related_name="user_rel_cvcvdj_n_n",
        null=True,
    )

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
