# Orders Page

- props
  - isLoading
  - userId
  - skip
  - limit
  - filter
  - fresh
  - totalCount
  - filteredCount
  - currency
  - isQualificationFilled
- fn()
  - onPageLoad
  - onPageReady
  - filterOrders
  - addToFavourite
  - removeFromFavourite
  - addNewOrders
  - resetNewOrdersCounter
  - resetNewOrders

## Header

## OrderList

### ListHeader

### Order

- state
  - isHidden
- props
  - id
  - type
  - category
  - customer
    - customerObject
  - title
  - description
  - budget
  - budgetForView
  - rejected_bid
  - pages
  - pagesFrom
  - pagesTo
  - unique
  - warranty_period
  - creation
    - readableCreation
  - deadline
    - readableDeadline
  - countOffers
  - isInviteOrder
  - isPremium
  - isRead
  - isFavorite
  - isPaid
  - isMatchFilter
  - isMatchQualification
  - authorHasOffer
  - authorOffer
    - expired
    - id
    - original_bid
    - text
  - recommendedBid
  - diffOffer
  - bids: int[]
  - authorFiles: fileObject[]
  - customerFiles: fileObject[]
  - currency
  - //graphData
- addToFavourite
- removeFromFavourite

## Pagination

# customerObject

- id
- avatar
- currency
- isOnline
- isWorked
- nickname
- lastVisited

# fileObject

- id
- hash
- name
- path
- readableCreation:
- sizeInMb
- type
