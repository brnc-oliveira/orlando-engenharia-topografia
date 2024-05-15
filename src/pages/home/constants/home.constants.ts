import banner1 from '../../../../public/assets/banners/banner-home-1.png';
import banner2 from '../../../../public/assets/banners/banner-home-1.png';
import banner3 from '../../../../public/assets/banners/banner-home-1.png';

import picture1 from '../../../../public/assets/pictures/picture-home-1.png';
import picture2 from '../../../../public/assets/pictures/picture-home-2.png';
import picture3 from '../../../../public/assets/pictures/picture-home-3.png';

import phoneIcon from '../../../../public/assets/contacts/phone.png';
import emailIcon from '../../../../public/assets/contacts/email.png';
import instagramIcon from '../../../../public/assets/contacts/instagram.png';
import whatsappIcon from '../../../../public/assets/contacts/whatsapp.png';

import equipment1 from '../../../../public/assets/equipments/equipment-home-1.png';

import rectangle from '../../../../public/assets/services/rectangle.png';

import about1 from '../../../../public/assets/about/about-home-1.png';

export interface Image {
 name: string;
 url: string;
 alt: string;
}

export interface Service {
 title: string;
 content: string;
 imageUrl: string;
}

export interface Contact {
 content: string;
 icon: string;
 link: string;
}

export const banners: Array<Image> = [
 {
  name: 'banner1',
  url: banner1,
  alt: 'Banner 1'
 },
 {
  name: 'banner2',
  url: banner2,
  alt: 'Banner 2'
 },
 {
  name: 'banner3',
  url: banner3,
  alt: 'Banner 3'
 }
];

export const pictures: Array<Image> = [
 {
  name: 'picture1',
  url: picture1,
  alt: 'Image 1'
 },
 {
  name: 'picture2',
  url: picture2,
  alt: 'Image 2'
 },
 {
  name: 'picture3',
  url: picture3,
  alt: 'Image 3'
 }
];

export const equipment: Image = {
 name: 'equipment1',
 url: equipment1,
 alt: 'Equipamento 1'
};

export const services: Array<Service> = [
 {
  title: 'Serviço 1',
  content:
   'Our membership management software provides full automation of membership renewals and payments',
  imageUrl: rectangle
 },
 {
  title: 'Serviço 2',
  content:
   'Our membership management software provides full automation of membership renewals and payments',
  imageUrl: rectangle
 },
 {
  title: 'Serviço 3',
  content:
   'Our membership management software provides full automation of membership renewals and payments',
  imageUrl: rectangle
 }
];

export const about: Image = {
 name: 'image1',
 url: about1,
 alt: 'Image 1'
};

export const contacts: Array<Contact> = [
 {
  content: '+55 (48) 99953-4526',
  icon: whatsappIcon,
  link: 'https://wa.me/5548999534526'
 },
 {
  content: '+55 (48) 3624-0617 ',
  icon: phoneIcon,
  link: 'tel:+554836240617'
 },
 {
  content: '@orlandoengenheiro',
  icon: instagramIcon,
  link: 'https://www.instagram.com/orlandoengenheiro/'
 },
 {
  content: 'danieljungmendes@hotmail.com',
  icon: emailIcon,
  link: 'mailto:danieljungmendes@hotmail.com'
 },
 {
  content: 'raizadecarvalho1991@outlook.com',
  icon: emailIcon,
  link: 'mailto:raizadecarvalho1991@outlook.com'
 }
];
