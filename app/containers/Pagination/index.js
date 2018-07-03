// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Row } from 'react-bootstrap'

type Props = {
  items: Array<Object>,
  onChangePage: () => void,
  initialPage: number,
}


class PaginationPage extends React.Component<Props> {
  state = {
    pager: {},
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
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

  getPager = (totalItems, currentPage = 1, pageSize = 6) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage;
    let endPage;

    if (totalPages <= 6) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 4) {
      startPage = 1;
      endPage = 6;
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

    const liClass = classNames({
      disabled: pager.currentPage === 1 || pager.currentPage === pager.totalPages,
      'page-item': true,
    });

    return (
      <Row>
        <ul className="pagination">
          <li className={liClass}>
            <a className="page-link" role="presentation" onClick={this.handleFirstPage}>First</a>
          </li>
          <li className={liClass}>
            <a className="page-link" role="presentation" onClick={this.handlePreviousPage}>Previous</a>
          </li>
          {pager.pages.map((page) =>
            (<li key={page} className={pager.currentPage === page ? 'page-item active' : ''}>
              <a className="page-link" role="presentation" onClick={() => this.setPage(page)}>
                {page}
              </a>
             </li>
            ))
          }
          <li className={liClass}>
            <a className="page-link" role="presentation" onClick={this.handleNextPage}>Next</a>
          </li>
          <li className={liClass}>
            <a className="page-link" role="presentation"onClick={this.handleLastPage}>Last</a>
          </li>
        </ul>
      </Row>
    );
  }
}

PaginationPage.defaultProps = {
  initialPage: 1,
}

export default PaginationPage
