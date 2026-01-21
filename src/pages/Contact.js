import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Icon from '../assets/FontAwsomeIcons';

const contactInfo = [
  {
    type: 'Sales questions',
    email: 'royalcera2@gmail.com',
    phone: ['+91 9481762288', '+91 9844405045'],
    icon: (<Icon name='money' />),
  },
  {
    type: 'Technical support',
    email: 'royalcera2@gmail.com',
    phone: ['+91 9481762288', '+91 9844405045'],
    icon: (<Icon name='mobile' />),
  },
  {
    type: 'Vehicle Contact',
    email: 'royalcera2@gmail.com',
    phone: ['+91 9481762288', '+91 9844405045'],
    icon: (<Icon name='truck' />),
  },
  {
    type: 'Bug report',
    email: 'royalcera2@gmail.com',
    phone: ['+91 9481762288', '+91 9844405045'],
    icon: (<Icon name='bug' />),
  },
];


export default function Contact() {
  return (
    <MainLayout>
      <div className="p-2 sm:ml-64 mt mt-[4.8rem]">
        <header className="border-2 rounded-lg border-dashed text-center text-3xl font-bold pb-1 mb-2 mt-3">
          Contact Us
        </header>
        <div className="border-2 w-full rounded-lg border-dashed pt-5">
          <div>
            {contactInfo.map((info, index) => (
              <div key={index} className="mb-6 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="inline-block rounded-md bg-primary-100 pl-4 pt-1 text-primary">
                    {info.icon}
                  </div>
                  <div className="ml-6">
                    <p className="font-bold dark:text-white">{info.type}</p>
                    <p className="text-neutral-500 dark:text-neutral-200">{info.email}</p>
                    <div className="text-neutral-500 dark:text-neutral-200">
                      {info.phone.map((phoneNumber, i) => (
                        <p key={i}>{phoneNumber}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}