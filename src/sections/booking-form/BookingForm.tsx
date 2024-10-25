import React from 'react';
import { Button } from '../../styles/sharedStyles';
import { BookingFormWrapper, InputContainer } from './BookingForm.styles';

export const BookingForm = () => {
  return (
    <BookingFormWrapper>
      <form>
        <InputContainer>
          <span>where to?</span>
          <input type="text" placeholder="place name" value="" />
        </InputContainer>
        <InputContainer>
          <span>when?</span>
          <input type="date" value="" />
        </InputContainer>
        <InputContainer>
          <span>how many?</span>
          <input type="number" placeholder="number of travellers" value="" />
        </InputContainer>
        <Button>Find Now</Button>
      </form>
    </BookingFormWrapper>
  );
};


