# payment_service.py
# BAD CODE — written intentionally for testing MergeMind
# Do not use in production

users = []  # ❌ global mutable state


def add_user(user):
    # ❌ no validation
    users.append(user)


def get_user_by_id(id):
    # ❌ shadowing built-in name "id"
    for u in users:
        if u["id"] == id:
            return u
    return None  # ❌ silent failure


def delete_user(id):
    # ❌ modifying list while iterating
    for u in users:
        if u["id"] == id:
            users.remove(u)


def calculate_total(price, tax):
    # ❌ no type checking
    return price + (price * tax)


def process_payment(user, amount):
    # ❌ missing exception handling
    response = external_api_call(user, amount)
    return response["status"]


def external_api_call(user, amount):
    # ❌ fake API call, insecure
    print("Sending payment for", user["card"])  # ❌ logging sensitive data
    return {"status": "success"}


def is_admin(user):
    # ❌ magic string
    return user.get("role") == "admin"


def authenticate(username, password):
    # ❌ plaintext password comparison
    if password == "admin123":
        return True
    return False


def calculate_age(dob):
    # ❌ wrong date math
    return 2025 - dob


def unused_function():
    # ❌ dead code
    pass
