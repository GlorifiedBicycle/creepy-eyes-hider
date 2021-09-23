Logic:

If the website is Slack
If the section is the main feed OR
If the section is any channel or thread
If the Reaction Bar includes ::eyes::
If the count of ::eyes:: is at least three
Hide the parent element


Stretch Features
Bundle images in the extension rather than remote hosting
Allow access to reacts on hidden posts
  Additional rules: Hide post if ::catdance:: > ::dogjam::
  (^above feature depends on preceding feature)
Pop-up interface to toggle extension on/off
CSS transitions - quick smooth fade from original image to notice image



Method:

Get element by ID or class - 
aria-label[0] is the first character in a strong describing the number of reactions
  consider pulling all characters from first index before first space to account for 9+ and 99+ reactions

https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild


post identifier: c_virtual_list__item
eyes identifier: class="c-button-unstyled c-reaction c-reaction--dark"

example redacted image: https://www.ktlitsmart.com/sites/default/files/styles/extra_large/public/GettyImages-1269644135%20-%20REDACTED.jpg?itok=M0EYh0Pc
