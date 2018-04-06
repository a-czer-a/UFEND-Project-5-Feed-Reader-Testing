/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have a URL defined and a URL is not empty', function() {

            for (i = 0; i < allFeeds.length; i++) {
                const feed = allFeeds[i];
              
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        }); 


        it('have a name defined and a name is not empty', function() {

            for (i = 0; i < allFeeds.length; i++) {
                const feed = allFeeds[i];
                  
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        }); 
    });


    describe('The menu', function() {

        it('is hidden by default', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        it('changes visibility when menu icon is clicked', function() {
            const menuIcon = $('.menu-icon-link');

            // first click
            menuIcon.trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // second click
            menuIcon.trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
        

    describe('Initial Entries', function() {
        const feedContainer = $('.feed');

        beforeEach(function(done) {
            feedContainer.empty();
            loadFeed(0, done);
        });

        it('at least a single entry should be loaded to the .feed container', function(done) {

            expect(feedContainer.find('.entry').length).not.toBe(0);
            done();
        });
    });
        

    describe('New Feed Selection', function() {

        const feedContainer = $('.feed');
        let firstFeed;

        beforeEach(function(done) {
            feedContainer.empty();
            loadFeed(0, function() {
                // stores initial feed content
                firstFeed = $('.feed').html();
                // changes content
                loadFeed(1, done);
            });
        });

        it('content (entries) should change when a new feed is loaded', function(done) {

            expect($('.feed').html()).not.toBe(firstFeed);
            done();
        });
    });
}());
