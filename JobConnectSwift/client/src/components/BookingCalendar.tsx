import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth] = useState("December 2025");

  const handleDateClick = (date: number) => {
    console.log('Date selected:', date);
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    console.log('Time selected:', time);
    setSelectedTime(time);
  };

  const renderCalendarDays = () => {
    const days = [];
    const startDay = 1;
    
    for (let i = 0; i < 5; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square" />
      );
    }

    for (let date = 1; date <= 31; date++) {
      const isSelected = selectedDate === date;
      const isAvailable = date >= 10;
      
      days.push(
        <button
          key={date}
          onClick={() => isAvailable && handleDateClick(date)}
          disabled={!isAvailable}
          className={`
            aspect-square rounded-md flex items-center justify-center text-sm font-medium
            transition-colors
            ${isAvailable ? 'hover-elevate active-elevate-2 cursor-pointer' : 'opacity-40 cursor-not-allowed'}
            ${isSelected ? 'bg-primary text-primary-foreground' : ''}
          `}
          data-testid={`button-date-${date}`}
        >
          {date}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-8">
      <Card className="p-6 md:p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold" data-testid="text-current-month">{currentMonth}</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" data-testid="button-prev-month">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-next-month">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold" data-testid="text-available-times">Available Times</h3>
            </div>
            
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTimeClick(time)}
                    className="justify-center"
                    data-testid={`button-time-${time.replace(/\s/g, '-').toLowerCase()}`}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground" data-testid="text-select-date-prompt">
                Select a date to see available times
              </p>
            )}
          </div>
        </Card>

        {selectedDate && selectedTime && (
          <Card className="p-6 bg-accent/50">
            <div className="space-y-3">
              <h4 className="font-semibold" data-testid="text-selected-appointment">Selected Appointment</h4>
              <div className="space-y-2 text-sm">
                <p data-testid="text-selected-date">
                  <span className="font-medium">Date:</span> Dec {selectedDate}, 2025
                </p>
                <p data-testid="text-selected-time">
                  <span className="font-medium">Time:</span> {selectedTime}
                </p>
              </div>
              <Button className="w-full mt-4" data-testid="button-continue">
                Continue
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
