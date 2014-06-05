Introduction
============

On login, set a cookie "__staff" if the user is a member of any group beyond Authenticated.
Cleared on logout.

On login, set a cookie "__auth".
Cleared on logout.

Render login, logout, register, preferences actions always.
Hide logout and preferences via css.
Swap login/logout and register/preferences if __auth cookie is present.

Now, if we have an __ac cookie, but not a __staff cookie, we can strip the __ac cookie in the proxy.
Caching proxy must be configured to not strip for posts or sensitive paths.