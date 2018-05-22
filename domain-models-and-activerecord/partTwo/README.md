# More Domain Modeling and ActiveRecord

Agenda

1. Recap
2. Add Order Domain Model
3. Abstract Checkout

Class code located at
(https://github.com/rob0t7/lhl-lectures/tree/master/domains-models-and-activerecord/partTwo)

## Add Order Domain Model

Here we add the following models Order, OrderItem and Product. We also
add functions to these models according to our domain modelling
exercise.

## Abstract Checkout

At the very end we created the **Checkout** object that would sit
between the client tier and the lower entities. This object could be
describe as a *service object*. It directly stores the domain logic
specific to the checkout workflow, like sending payment receipts.

Below is a sequence diagram that explains the Checkout#process_payment
method:

![alt sequence diagram](https://github.com/rob0t7/lhl-lectures/blob/master/domain-models-and-activerecord/partTwo/sequence.png)
## References

Terms:

* **ENTITY**: An object that is not defined by its attributes, but
  rather by a thread of continuity and its identity.
* **Value Object**: An object that contains attributes but has no
  conceptual identity. They should be treated as immutable.
* **Aggregate**: A collection of objects that are bound together by a
  root entity, otherwise known as an aggregate root. The aggregate
  root guarantees the consistency of changes being made within the
  aggregate by forbidding external objects from holding references to
  its members.
* **Factory**: Methods for creating domain objects. Can be either
another object or method on an existing object.
* **Active Record Pattern**: An object that wraps a row in a database
  table or view, encapsulates the database access, and adds domain
  logic on that data.

Beginner Resources

* [Practical Object-Oriented Design in Ruby: An Agile
  Primer](https://www.amazon.ca/Practical-Object-Oriented-Design-Ruby-Primer/dp/0321721330/ref=sr_1_1?ie=UTF8&qid=1527009549&sr=8-1&keywords=Practical+Object-Oriented+Design+in+Ruby%3A+An+Agile+Primer)
* [Active Record Guide](http://guides.rubyonrails.org/)
* [Active Record API Docs](http://api.rubyonrails.org/)

Intermediate Resources

* [Clean
  Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?s=books&ie=UTF8&qid=1527009602&sr=1-1&keywords=clean+code&dpID=515iEcDr1GL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch)
* [Agile Software Development, Principles, Patterns, and Practices](https://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445/ref=asap_bc?ie=UTF8)
* [99 Bottles of OOP](https://sandimetz.dpdcart.com/)
* [UML Resource](https://www.amazon.ca/UML-Distilled-Standard-Modeling-Language/dp/0321193687/ref=sr_1_1?s=books&ie=UTF8&qid=1527009685&sr=1-1&keywords=uml)

Advanced Resources

* [Domain Drive Design](https://www.amazon.ca/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?s=books&ie=UTF8&qid=1527009704&sr=1-1&keywords=domain+driven+design)
* [Patterns of Enterprise Architecture](https://www.amazon.ca/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420/ref=sr_1_2?s=books&ie=UTF8&qid=1527009718&sr=1-2&keywords=fowler)
* [Gang of Four Design Patterns](https://www.amazon.ca/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?s=books&ie=UTF8&qid=1527009743&sr=1-1&keywords=design+patterns)
p
