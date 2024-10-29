from models import Product


def get_products():
    products = Product.query.all()
