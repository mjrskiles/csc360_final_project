/* This interface specifies that the CTA train tracker API will return
   a top level object named 'ctatt'.
   The train tracker returns different object structures for successful
   requests and errors, so it is hard to specify the structure further.
*/

export interface TrainTrackerResponse {
  ctatt: any
}