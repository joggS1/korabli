/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
import { FC } from 'react';

interface Props {
  items: ReadonlyArray<{ title?: string; description?: string } & Record<any, any>>;
}

export const VehicleInfoAccordionList: FC<Props> = ({ items }) => {
  return (
    <Accordion type='multiple'>
      {items.map((item) => (
        <AccordionItem key={item.title} value={item.title!}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
