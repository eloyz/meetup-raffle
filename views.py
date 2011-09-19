import meetup_api_client
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.conf import settings

API_KEY = settings.API_KEY

def home(request, event_id=16085541):
    meetup = meetup_api_client.Meetup(API_KEY)
    event_set = meetup.get_events2(event_id=event_id).results
    rsvp_set = meetup.get_rsvps(event_id=event_id).results
    
    for event in event_set:
        print 'event', event.name

    for member in rsvp_set:
        print 'member', dir(member)
    
    return render_to_response(
        'index.html', 
        {
            'event':event,
            'rsvp_set':rsvp_set,
        }, 
        RequestContext(request)
    )