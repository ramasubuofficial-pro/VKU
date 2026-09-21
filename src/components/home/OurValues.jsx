import React from 'react';
import Container from '../common/Container';
import { HeartHandshake, Users, Flame, ThumbsUp } from 'lucide-react';

const defaultValuesData = [
  {
    title: "Our Values",
    icon: HeartHandshake,
    iconColor: "text-rose-400",
    description: "Our values are the pillars that support our organization. We believe in \"respect all, time and views,\" which creates a happy and healthy work environment. \"Word is a word\" is another value that ensures we deliver on our promises to our clients. Finally, \"hands on\" is a value that we all take pride in, knowing that execution is everything."
  },
  {
    title: "Our Culture",
    icon: Users,
    iconColor: "text-green-500",
    description: "At VKU, fairness is at the core of our culture. We firmly believe that respect for one another fosters a happy workplace. As soon as you step into our office, you'll immediately sense the positive energy that permeates throughout. Our team thrives in an optimistic environment, and it propels us forward in all that we do. We're committed to creating a workspace that embodies the highest standards of excellence and reflects our values. We invite you to join us in cultivating an exceptional organization together!"
  },
  {
    title: "Expectation from us",
    icon: Flame, // Flame as an alternative to raised fist, representing drive/passion
    iconColor: "text-orange-500",
    description: "At VKU, we strive to create a fair working environment, a bond that you will cherish, and a path for your career growth. We believe in keeping hierarchy to a minimum, and you can expect to enjoy your journey with us. We believe in building a beautiful organization together with you."
  },
  {
    title: "Expectation from you",
    icon: ThumbsUp,
    iconColor: "text-purple-500",
    description: "We expect you to put in an honest day's work, show respect for your workplace, and contribute beyond yourself. Remuneration is vital, but professional satisfaction is the goal."
  }
];

const OurValues = ({ data = defaultValuesData, title = "" }) => {
  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <Container className="max-w-[1200px]">
        {title && <h2 className="text-3xl font-bold text-gray-700 mb-16 text-center md:text-left">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col">
                <div className="mb-6">
                  <Icon className={`w-10 h-10 ${item.iconColor} stroke-[1.5]`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default OurValues;
