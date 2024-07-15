interface EventStream {
    on(eventType: string, handler: (event: any) => void): void;
}

interface Operator {
    operate(handler: (event: any) => void): void;
}

/**
 * Reacts to events from the given source.
 * 
 * @param {EventStream|Operator} source - The event source to react to.
 */
function reactToEvents(source: EventStream | Operator): void {
    if ((source as EventStream).on) {
        // Handle the EventStream case
        (source as EventStream).on('event', eventHandler);
    } else if ((source as Operator).operate) {
        // Handle the Operator case
        (source as Operator).operate(eventHandler);
    } else {
        throw new TypeError('source must be an EventStream or Operator');
    }
}

function eventHandler(event: any): void {
    console.log('Event received:', event);
}

// Assuming you have some definitions for EventStream and Operator
class MyEventStream implements EventStream {
    on(eventType: string, handler: (event: any) => void): void {
        // Implementation for adding event listener
    }
}

class MyOperator implements Operator {
    operate(handler: (event: any) => void): void {
        // Implementation for operating with a handler
    }
}

// Usage example
const eventStream = new MyEventStream();
reactToEvents(eventStream);

const operator = new MyOperator();
reactToEvents(operator);
