Introduction
============

On login, set a cookie "__staff" if the user is a member of any group beyond Authenticated.
Clear on logout.

Make several user actions sensitive to presence or absence of request.HTTP_X_ANONYMOUS.

For this scheme to work, proxy must set HTTP_X_ANONYMOUS when appropriate.
Proxy may then strip __ac cookie under carefully configured circumstances when __staff is missing.

This package currently has some unnecessary code to support js and css resources if needed later.