# Domain Modeling and ActiveRecord

Agenda

1. What is Domain Modeling
2. Project dependencies and Bundler
3. Customer/Address Domain Model
4. Persisting the Domain Model using __ActiveRecord__
   1. Setup
   2. CRUD
   3. Validation
   4. Model Relationships

Class code located at
(https://github.com/rob0t7/lhl-lectures/tree/master/domains-models-and-activerecord)

![alt Domain Model Diagram](https://github.com/rob0t7/lhl-lectures/blob/master/domain-models-and-activerecord/partOne/domain-model.svg)

## What is Domain Modeling

A domain model is a system of abstractions that describes selected
aspects of a sphere of knowledge, influence or activity. The model can
then be used to solve problems related to that domain. The domain
model is a representation of meaningful real-world concepts pertinent
to the domain that need to be modelled in software. The concepts
include the data involved in the business and rules the business uses
in relation to that data.


A domain model generally uses the vocabulary of the domain, thus
allowing a representation of the model to be communicated to
non-technical stakeholders.

## Project Dependencies with Bundler

Bundler is a ruby _gem_ that allows us to manage our project's
dependencies. It is similar to how npm works on the project level.

## Customer/Address Domain Model

We created very simple domain model with two classes: Customer and
Address.

*Customer* is an **Entity** model that is unique in the system and has a
life span. The *Customer* model contains the value objects: *Address*
representing the current address of the customer and *addresses* which
is a collection of historical addresses of the *customer*. Value
objects are a special type of model and should be treated as
immutable. They are only accessed through the aggregate root which in
this case is the *Customer* model.

The code for this section is located in (...)


## Persisting the Domain Model using __ActiveRecord__

We later rewrote the domain model to persist the data in a relational
database using activerecord (the ruby library that implements the
pattern).

### Active Record Setup

To start using *activerecord* we need to add it to our *Gemfile*.

``` ruby
# Gemfile

gem 'activerecord'
```

Then we need to establish a connection. After establishing the
connection we can also define the schema for the DB.

``` ruby
# setup.py

require 'active_record'
require 'faker'
require 'pry'

# ... other includes

ActiveRecord::Base.logger = ActiveSupport::Logger.new(STDOUT)

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'lhl-domain-models',
)

ActiveRecord::Schema.define do
    # ... schema definition. See finished code
end

```

 We can then define the model.

 ```ruby
 class Customer < ActiveRecord::Base
 end
 ```

### CRUD

With the model definition we can then do the basic CRUD actions

#### Create

To create a model we need to create an instance and call *save()*.

``` ruby
bob = Customer.new(name: 'Bob')
bob.save # causes INSERT CALL

bob = Customer.create(name: 'Bob') # Does the same as the two calls above
```

#### READ/RETRIEVE

We can then fetch the model and create an instance either through the
**find** or **where** call. **where** always returns a list of models
while **find** returns 1 instance or nil.

``` ruby
bob = Customer.find(1) # find by primary key
bob = Customer.find_by(email: 'bob@example.com')
# or
bob = Customer.find_by_email('bob@example.com')

list_of_bobs = Customer.where(email: 'bob@example.com')
list_of_bobs = Customer.where('email = ?', 'bob@example.com')
```

#### UPDATE

We can update a record by fetching it from the DB, changing the
attributes and then syncing it back.

``` ruby
bob = Customer.find_by(email: 'bob@example.com')
bob.name = 'Jill'
bob.save # UDDATE SQL Statement
```

#### DELETE

We can remove a record by instantiating an instance and then
destroying it.

``` ruby
bob = Customer.find_by(email: 'bob@example.com')
bob.destroy
```

### Validation

In most applications we want to validate a AR model before we sync it
to the DB. We can use AR to validate our models.

The builtin validation functions are located in
(http://api.rubyonrails.org/classes/ActiveModel/Validations/HelperMethods.html).

You can also define your own custom validation.

Please refer to the class code example.

### Model Relationships

Later in class we created the second **Address** class. We should how
we can create a 1-to-1 and 1-to-many relationship in ActiveRecord. We
also had to abstract parts of activerecord to keep the same *domain
logic*.

Please see the Address model.

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
