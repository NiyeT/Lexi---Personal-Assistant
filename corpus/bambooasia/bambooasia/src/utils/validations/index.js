import Validator from 'validatorjs'
import {
  isWeekendDate,
  isDuringScheduledClosure,
  datetimeInFuture,
  timeDuringOpeningHours,
} from './PickupDeliveryValidator';

Validator.register('notWeekendDate', function(value, requirement, attribute) {
  return !isWeekendDate(value)
}, 'Pickup is not available on the weekends');

Validator.register('notDuringClosure', function(value, requirement, attribute) {
  return !isDuringScheduledClosure(value)
}, 'The chosen :attribute is during a scheduled/holiday closure period');

Validator.register('inFuture', function(value, requirement, attribute) {
  return datetimeInFuture(value)
}, 'The chosen :attribute is in the past and invalid');

Validator.register('duringOpeningHours', function(value, requirement, attribute) {
  return timeDuringOpeningHours(value)
}, 'The chosen :attribute is not during opening hours');
