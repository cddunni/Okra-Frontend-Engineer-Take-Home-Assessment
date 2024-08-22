import LinkedIn from "@/assets/icons/linked-in.svg?react?.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react?.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react?.svg?react";
import Slack from "@/assets/icons/slack.svg?react?.svg?react";
import BookOpen from '@/assets/icons/book-open.svg?react?.svg?react';
import Book from '@/assets/icons/book.svg?react?.svg?react';
import React from ".svg?react";

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
    variant: 'brinte-doc'
  },
    {
    title: 'Join Slack community',
    description: 'Brinte community',
    icon: <Slack/>,
    variant: 'brinte-slack'
  },
    {
    title: 'Go to help center',
    description: 'Brinte support',
    icon: <Book/>,
    variant: 'brinte-help'
  }
]