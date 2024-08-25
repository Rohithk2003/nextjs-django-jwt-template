from django.core.management.base import BaseCommand
from api.models import Blog
from faker import Faker


class Command(BaseCommand):
    help = "Create 100 blog posts"

    def handle(self, *args, **kwargs):
        faker = Faker()
        blogs = [
            Blog(
                title=faker.sentence(nb_words=6),
                content=faker.text(),
            )
            for _ in range(100)
        ]
        Blog.objects.bulk_create(blogs)
        self.stdout.write(self.style.SUCCESS("Successfully created 100 blogs"))
