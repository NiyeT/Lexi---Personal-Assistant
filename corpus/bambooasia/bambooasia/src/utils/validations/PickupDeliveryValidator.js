import { isFriday, isWeekend, setHours, setMinutes } from 'date-fns'
import { ORDER_TYPE_DELIVERY, ORDER_TYPE_PICKUP } from '../constants'
import Validator from 'validatorjs'

export const isWeekendDate = (dateTime) => {
  return isWeekend(dateTime)
}

// todo: pull scheduled closure info from brain or contentful
export const isDuringScheduledClosure = (dateTime) => {
  return false;
  /**
   * Old PHP CODE:
   // $holidayStartDate = new DateTime();
   // $holidayStartDate->setDate(2016, 9, 2);
   // $holidayStartDate->setTime(15,00);
   // $holidayEndDate = new DateTime();
   // $holidayEndDate->setDate(2016, 9, 5);
   // $holidayEndDate->setTime(24,00);

   if($scheduledclosure['active'] == 1) {
      $startTime = strtotime($scheduledclosure['date_close']);
      $endTime = strtotime($scheduledclosure['date_open']);
      // $startTime = $holidayStartDate->getTimestamp();
      // $endTime = $holidayEndDate->getTimestamp();
      $result = $time >= $startTime && $time <= $endTime;
    }
   */
}

// isFuture from date-fns next was failing
// so user our own comparison
export const datetimeInFuture = (dateTime) => {
  var now = new Date();
  return dateTime > now;
}

// todo: generalize this to accept other order fulfillment types
export const timeDuringOpeningHours = (dateTime, type = ORDER_TYPE_PICKUP) => {
  // is it on a friday? if so use different hours closing early
  const openDateTime = setHours(setMinutes(dateTime, 30), 11); // normal open 1130
  let closeDateTime = setHours(dateTime, 19); // normal close 7pm

  if ( type === ORDER_TYPE_DELIVERY) {
    closeDateTime = setHours(setMinutes(dateTime, 30), 18)  // all deliveries close 30 mins earlier
  }

  return dateTime >= openDateTime && dateTime < closeDateTime;
}

// todo: use order total logic
export const minimumOrderMet = () => {
  return true;
  /**
   * Old PHP code:
   $totalPrice = $this->getBaseOrderTotal();
   $minOrderTotal = $this->getMinOrderTotal();
   if($totalPrice >= $minOrderTotal) {
      $result = true;
   }
   */
}

// todo: use zone and order type and total logic
// zone 1 needs 36 hr notice (not including weekends) for all catering stations and individual orders of (bowls wraps salads) over 100 ppl
// zone 2 needs 36 hr notice (not including weekends) always for any number of items
export const validDeliveryDaysNotce = () => {
  return true;
  /**
   * Old PHP code:
   $result = true;
   $deliveryAddressInRange = $this->getDeliveryAddressInRange();
   //        error_log("checking valid delivery days notice, delivery address in range : ".$deliveryAddressInRange);



   if($deliveryAddressInRange == "zone1") {
            //check if catering order
            $isCateringOrder = $this->hasCateringItems();

            //check if order total over $1000
            $totalPrice = $this->getBaseOrderTotal();

            if($isCateringOrder || $totalPrice > 1000) {
                $result = $this->isEnoughLeadTime();
            }

        } else { //zone2
            $result = $this->isEnoughLeadTime();
        }

   return $result;
   */
}

// todo: finish this coding in JS
export const isEnoughLeadTime = () => {
  return true;
  /** old PHP Code
   $result = false;
   //figure out business (non-weekend) days between now and chosen delivery date
   $deliveryDateTime = $this->getDeliveryDateTime();
   $deliveryDate = new DateTime();
   $deliveryDate->setTimestamp(strtotime($deliveryDateTime));
   $currentDateTime = new DateTime();
   $businessDaysBetween = $this->getNumBusinessDaysBetweenDates($currentDateTime, $deliveryDate);

   //        error_log("business days between :".$businessDaysBetween);

   if($businessDaysBetween > 1) {
            $result = true;
        } else if($businessDaysBetween == 1) {

            if ($this->isWeekendDate(time())) { //for the case of delivery on tuesday but ordering over the weekend
                $result = true;
            } else if (date('H') < 11) { //check that current time is before 11am
                $result = true;
            }
        }

   return $result;
   */
}



export class PickupValidator {

  static doValidation(values) {
    const rules = {
      date: 'required|date|notWeekendDate|notDuringClosure|inFuture|duringOpeningHours',
    };

    const messages = {
      required: 'Enter a valid :attribute'
    };

    const validation = new Validator(values, rules, messages);
    validation.setAttributeNames({ date: 'pickup date' });
    return validation
  }
}

export class DeliveryValidator {

  // todo: finish validations rules for delivery, methods stubbed out above
  // old php code
  // $validDelivery = $this->minimumOrderMet() && $this->validDeliveryTime() && $this->validDeliveryDaysNotice()

  static doValidation(values) {
    const rules = {
      date: 'required|date|notWeekendDate|notDuringClosure|inFuture|duringOpeningHours',
    };

    const messages = {
      required: 'Enter a valid :attribute'
    };

    const validation = new Validator(values, rules, messages);
    validation.setAttributeNames({ date: 'delivery date' });
    return validation
  }
}
