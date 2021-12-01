# City_Planning_By_Average_Heart_Beat

# MOTIVATION
ECG reflects the state of cardiac heart and hence is like a pointer to the health conditions of a human being. ECG, if properly analyzed, can provide us information regarding various diseases related to heart.
However, ECG being a non-stationary signal, the irregularities may not be periodic and may show up at different intervals. Clinical observation of ECG can hence take long hours and can be very tedious.
Moreover, visual analysis cannot be relied upon. This calls for computer-based techniques for ECG analysis. Various contributions have been made in literature regarding beat detection and classification of ECG. 
Most of these use frequency or time domain representation of ECG signals. But the major problem faced by the coders is the vast variations in the morphologies of ECG signals. Moreover, we have to consider the time constraints as well. 
Thus our basic objective is to come up with a simple method having less computational time without compromising with the efficiency.

# THEORY
In the 12-lead electrocardiogram (ECG), the time from the onset of the QRS complex (Q or R wave) to the apex or peak of R or to R' (when present), using indirect or semidirect surface unipolar precordial leads, bipolar limb leads or unipolar limb leads, is called ventricular activation time (VAT), R wave peak time (RWPT), R-peak time or intrinsicoid deflection (ID). 

The R-peak time in a specific ECG lead is the interval from the earliest onset of the QRS complex, preferably determined from multiple simultaneously recorded leads, to the peak (maximum) of the R wave or R' if present. Irrespective of the relative height of the R and R' waves, the R-peak time is measured to the second peak.
The parameter corresponds to the time of the electrical activation occurring from the endocardium to the epicardium as reflected by the recording electrode located at a variable distance on the body surface, depending on the lead type: a unipolar precordial lead, a bipolar or unipolar limb lead.

 In normal conditions, the R-peak time for the thinner-walled right ventricle is measured from lead V1 or V2 and its upper limit of normal is 35 ms. The R-peak time for the left ventricle (LV) is measured from leads V5 to V6 and 45 ms is considered the upper limit of normal.
 Once the R peaks are obtained, heart beat rate in (beats/second) can be calculated.
 
 # Basic Principle
 The impulses of the heart are recorded as waves called P-QRS-T deflections. The following is the description and significance of each deflection and segment.
P wave indicates atrial depolarization (and contraction).
PR Interval measures time during which a depolarization wave travels from the atria to the ventricles.
QRS Interval includes three deflections following P wave which indicates ventricular depolarization (and contraction).
Q wave is the first negative deflection while
R wave is the first positive deflection. S wave indicates the first negative deflection after R wave.
ST Segment measures the time between ventricular depolarization and beginning of repolarization.
T wave represents ventricular repolarization.
QT Interval represents total ventricular activity.

# Steps for detection of R - peaks

1. Remove low frequency components
2. Change to frequency domain using fft
3. Remove low frequency components
4. Back to time domain using ifft
5. Find local maxima using filter
6. Remove small values, store significant ones
7. Adjust filter size and repeat 2,3.

# RESULTS:
We got the heart rate from the simulation
These heart rates can be entered in our website to get the expected future population.
Since we know the expected future population then we calculate the average water demand in the city (assuming 135L/day/Person is consumed).
Knowing the average water demand of a city this data can be shared with state governments to fulfill this demand in future.
Also we can suggest the total number of Water treatment plant need to be there in the city (assuming 200-500 Liters/hour).

# conclusion:
MATLAB is so useful and handy that even one can monitor his/her heart condition simply utilizing the power of MATLAB
Successful simulation of data and obtained the heart rates.
Heart rates entered into website gives same result as manual calculation.
Here we used just heartrate to predict the life expectancy which is not very reasonable but this was just an example.










