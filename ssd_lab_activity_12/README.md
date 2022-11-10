# Question 1

#### Assumptions

- foot pressure is detected only when the pressure remains same for more than 2 readings
- stride length is measured by calculating the absolute difference of mid points of foot pressure
- for calculating velocity, time difference is measured from start time of the recorded foot pressure

#### Execution

`python3 q1.py`

#### Output format

```python
Stride Length:  37
Stride Velocity:  5.305420131918554
Cadence:  25.81015199311729
```

# Question 2

#### Assumptions

- foot pressure is detected only when the pressure remains same for more than 2 readings
- stride length is measured by calculating the absolute difference of mid points of foot pressure
- for calculating velocity, time difference is measured from start time of the recorded foot pressure
- the 3 matrices taken are the ones where foot pressure is started measuring in the previous question
- the first time foot is placed at the bottom of matrix
- second time same leg is placed at top of matrix
- stride length is measured as the difference of the 2 coordinates
- timestamp is taken to be same as previous question

#### Execution

`python3 q2.py`

#### Output format

```python
Stride Length:  121
Stride Velocity:  17.350157728706623
Cadence:  25.81015199311729

```
