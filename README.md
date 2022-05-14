***Note:*** only ```/naszyjniki``` is working for now as it has correct image format in the database

# The purpose 

This is a website that I've created to replace the old Wordpress website my mother was using to show her jewellery collection. All the functionalities remained the same, however, I also added some to automate the creation process of new items in the collection as my mother was having troubles adding them on her own.

# Technologies

Webiste was created using only React, using standard libraries like ```@mui```, ```styled-components```and ```swiper```. For the database and file storage I used ```firebase```, which allowed me to create automated process of uploading files and the products which are than displayed in collections.

# Hidden page

For my mother to upload new items I created a page, which is not accessible in normal flow with a path: ```/kasia```. Authorisation is required to gain the access to the file uploader that's why I will show it here.
![This is an image](https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2FScreenshot%202022-05-14%20at%2016.51.59.png?alt=media&token=f3e46bbb-8e96-49bb-aca7-34762b6dfbcd)
One can create a product and upload relevant images to the database. After successful upload one is redirected to ```/success``` page where you can choose to upload more products or go to the home page.
