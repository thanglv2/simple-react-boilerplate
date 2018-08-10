// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Row } from 'reactstrap'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const StyledPagination = styled(Row)`
  display: flex;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  ul {
    margin: 0 auto;
    flex-wrap: wrap;
    li.active a {
      background-color: #0a3531 !important;
      border-color: #0a3430 !important;
    }
    li.disabled a {
      cursor: not-allowed !important;
      opacity: 0.6;
      background-color: #e9ecef;
      border-color: #dee2e6;
    }
  }
`

type Props = {
  items: Array<Object>,
  onChangePage: () => void,
  initialPage: number,
}


class PaginationPage extends React.Component<Props> {
  state = {
    pager: {
      totalPages: 1,
      currentPage: 1,
      pages: [1, 2],
    },
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage = (page) => {
    const { items, onChangePage } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page);

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager });

    onChangePage(pageOfItems);
  }

  getPager = (totalItems, currentPage = 1, pageSize = 8) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage;
    let endPage;

    if (totalPages <= 8) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 4) {
      startPage = 1;
      endPage = 8;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 5;
      endPage = totalPages;
    } else {
      startPage = currentPage - 3;
      endPage = currentPage + 2;
    }


    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min((startIndex + pageSize) - 1, totalItems - 1);
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    }
  }

  handleFirstPage = () => {
    this.setPage(1);
  }
  handlePreviousPage = () => {
    this.setPage(this.state.pager.currentPage - 1);
  }
  handleNextPage = () => {
    this.setPage(this.state.pager.currentPage + 1);
  }
  handleLastPage = () => {
    this.setPage(this.state.pager.totalPages);
  }

  render() {
    const { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <StyledPagination>
        <ul className="pagination">
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a className="page-link" role="presentation" onClick={this.handleFirstPage}>
              <FormattedMessage id="First" defaultMessage="First" />
            </a>
          </li>
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a className="page-link" role="presentation" onClick={this.handlePreviousPage}>
              <FormattedMessage id="Previous" defaultMessage="Previous" />
            </a>
          </li>
          {pager.pages.map((page) =>
            (
              <li key={page} className={pager.currentPage === page ? 'page-item active' : ''}>
                <a className="page-link" role="presentation" onClick={() => this.setPage(page)}>
                  {page}
                </a>
              </li>
            ))
          }
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a className="page-link" role="presentation" onClick={this.handleNextPage}>
              <FormattedMessage id="Next" defaultMessage="Next" />
            </a>
          </li>
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a className="page-link" role="presentation"onClick={this.handleLastPage}>
              <FormattedMessage id="Last" defaultMessage="Last" />
            </a>
          </li>
        </ul>
      </StyledPagination>
    );
  }
}

PaginationPage.defaultProps = {
  initialPage: 1,
}

export default PaginationPage
