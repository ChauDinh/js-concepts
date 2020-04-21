# JavaScript Design Patterns

## What is a pattern?

A pattern is a solution that can be reused to solve commonly occuring problems in software design. The design patterns have three main benefits:

- Proven solutions: these solutions reflect the experience and insights the developers that helped define and improve them bring to the pattern.
- Reused easily: A pattern can be adapted to suit your own programs.
- Expressive: A pattern is a set of structure and "vocabulary"/"terms" to the solution.

## The Structure of a Design Pattern

- Pattern name
- Context outline: the contexts in which the pattern is effective in responding to the users needs.
- Problem statement: a statement of the problem being addressed so we can understand the intent of the pattern
- Solution: a description of how problems are being solved in a list of steps and perceptions.
- Design:
- Implementation
- Illustration: a visual representation of classes in the patterns (UML diagrams)
- Co-requisites: what other patterns may be needed to support
- Relations:
- Known usage
- Discussion

## Categories of Design Patterns

The design patterns can be locked down into 3 main categories:

- Creational Design Patterns: focus on handling object, classes creation. These patterns aim to solve problems by controlling creation process.

  - Constructor
  - Factory
  - Abstract
  - Prototype
  - Singleton
  - Builder

- Structural Design Patterns: the pattern concerns object composition and relationships between different objects. For example, they help to ensure that one part of a system changes, the entire structure of the system doesn't need to do the same.

  - Decorator
  - Facade
  - Flyweight
  - Adapter
  - Proxy

- Behavioral Design Patterns: focus on moving or streamlining the communication between objects in a system.
  - Iterator
  - Mediator
  - Observer
  - Visitor

## The Table of Design Patterns

| Creational                                              | Structural                                                              | Behavioral                                                                                       |
| ------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Classes: Factory Method                                 | Classes: Adapter                                                        | Classes: Interpreter, Template Method                                                            |
| Object: Abstract Factory, Builder, Prototype, Singleton | Object: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy | Chain of Reponsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor |
