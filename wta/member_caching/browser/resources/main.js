// JavaScript for the 'IMemberCachingLayer' Plone browser layer */

jQuery(function($) {
    if (document.cookie.search('__auth="1"') > 0) {
        var login_node = $('#personaltools-login a, a#personaltools-login'),
            join_node = $('#personaltools-join a, a#personaltools-join'),
            prefs_node = $('#personaltools-preferences a, a#personaltools-preferences'),
            logout_node = $('#personaltools-logout a, a#personaltools-logout');

        login_node
            .attr('href', logout_node.attr('href'))
            .html(logout_node.html());
        join_node
            .attr('href', prefs_node.attr('href'))
            .html(prefs_node.html());
    }
});