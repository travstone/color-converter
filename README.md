color-converter
===============

--UPDATE, 2013-07-09: 
This is now rendered as a form/widget.... simply paste in your RGBa value and click the 'Convert' 
button! If you want to save each conversion for comparison, just check the 'Save previous conversions' 
checkbox. Bonus feature: Hex values are now also generated! Welcome back to the 90's!


Small JS snippet to convert RGBA colors to RGB colors

Add a group of source RGBA colors (as objects) within the initial array, then just run the page on your browser. 
The initial colors are then depicted just above the translated color. There's a grey bar down the right side, 
just so I could confirm the alpha.

NOTE: this only works for colors that have a transparency over a white background, or put another way, 
this only calculates a solid color assuming that the background is white. I haven't bothered to figure out the
math for translating transparency with other background colors.




