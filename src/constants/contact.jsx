import LinkedIn from "@/assets/icons/linked-in.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Slack from "@/assets/icons/slack.svg?react";
import BookOpen from '@/assets/icons/book-open.svg?react';
import Book from '@/assets/icons/book.svg?react';

export const howYouFoundUs = [
    {
        name: 'Search engine',
        value: 'Search engine'
      },
      {
        name: 'Recommended by friends or colleague',
        value: 'Recommended by friends or colleague'
      },
      {
        name: 'Social media',
        value: 'Social media'
      },
      {
        name: 'Blog or publication',
        value: 'Blog or publication'
      },
      {
        name: 'Others',
        value: 'Others'
      }
]
export const navLinks = ['Products', 'Customers', 'Docs', 'Our Story', 'Pricing', 'Contact']
export const contacts = [
    {
        title: 'LinkedIn',
        icon: <LinkedIn/>
    },
    {
        title: 'X',
        icon: <Twitter/>
    },
    {
        title: 'Youtube',
        icon: <Youtube/>
    },
    {
        title: 'Slack',
        icon: <Slack/>
    },
]
export const legal = ['Terms', 'Privacy']
export const resources = [
  {
    title: 'See Brinte docs',
    description: 'Brinte docs',
    icon: <BookOpen/>,
    variant: 'bg-purple_400 row-span-2 hover:bg-purple_500'
  },
    {
    title: 'Join Slack community',
    description: 'Brinte community',
    icon: <Slack/>,
    variant: 'bg-orange_400 hover:bg-orange_500'
  },
    {
    title: 'Go to help center',
    description: 'Brinte support',
    icon: <Book/>,
    variant: 'bg-on_primary hover:bg-tertiary_dim'
  }
]